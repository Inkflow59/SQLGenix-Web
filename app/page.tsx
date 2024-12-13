"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">SQLGenix</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Une librairie PHP moderne et puissante pour la génération et la manipulation de requêtes SQL
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/docs">
                  Documentation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/docs/getting-started">Démarrage rapide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Caractéristiques principales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-card">
              <Database className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Génération SQL intuitive</h3>
              <p className="text-muted-foreground">
                Créez des requêtes SQL complexes de manière fluide et intuitive avec une syntaxe moderne
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Shield className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Sécurité maximale</h3>
              <p className="text-muted-foreground">
                Protection intégrée contre les injections SQL et validation automatique des paramètres
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Zap className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Performances optimales</h3>
              <p className="text-muted-foreground">
                Optimisation automatique des requêtes et mise en cache intelligente des résultats
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Exemple d'utilisation</h2>
          <div className="max-w-3xl mx-auto">
            <pre className="p-4 rounded-lg bg-card border overflow-x-auto">
              <code className="text-sm">
{`<?php
use SQLGenix\\Query;

// Création d'une requête simple
$query = new Query()
    ->select('users.*, posts.title')
    ->from('users')
    ->join('posts', 'users.id = posts.user_id')
    ->where('users.active', '=', true)
    ->orderBy('users.created_at', 'DESC');

// Exécution de la requête
$results = $query->get();`}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </main>
  );
}