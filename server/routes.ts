import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      const submission = await storage.createContactSubmission(validatedData);
      
      console.log("New contact submission received:", {
        id: submission.id,
        name: `${submission.firstName} ${submission.lastName}`,
        email: submission.email,
        phone: submission.phone,
        service: submission.service,
        createdAt: submission.createdAt,
      });
      
      res.status(201).json({
        success: true,
        message: "Thank you for your inquiry! We'll be in touch within 24 hours.",
        id: submission.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors,
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred. Please try again later.",
        });
      }
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching submissions.",
      });
    }
  });

  app.get("/api/contact/:id", async (req, res) => {
    try {
      const submission = await storage.getContactSubmission(req.params.id);
      if (!submission) {
        res.status(404).json({
          success: false,
          message: "Submission not found",
        });
        return;
      }
      res.json(submission);
    } catch (error) {
      console.error("Error fetching contact submission:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching the submission.",
      });
    }
  });

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  return httpServer;
}
