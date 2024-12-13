"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>
      
      <Tabs defaultValue="installation" className="space-y-4">
        <TabsList>
          <TabsTrigger value="installation">Installation</TabsTrigger>
          <TabsTrigger value="configuration">Configuration</TabsTrigger>
          <TabsTrigger value="usage">Utilisation</TabsTrigger>
        </TabsList>

        <TabsContent value="installation">
          <Card>
            <CardHeader>
              <CardTitle>Installation</CardTitle>
              <CardDescription>
                Installez SQLGenix via Composer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-4 rounded-lg">
                <code>composer require sqlgenix/sqlgenix</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="configuration">
          <Card>
            <CardHeader>
              <CardTitle>Configuration</CardTitle>
              <CardDescription>
                Configurez votre connexion à la base de données
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-4 rounded-lg">
                <code>{`<?php
// config/database.php
return [
    'default' => 'mysql',
    'connections' => [
        'mysql' => [
            'driver' => 'mysql',
            'host' => 'localhost',
            'database' => 'your_database',
            'username' => 'your_username',
            'password' => 'your_password',
        ]
    ]
];`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <CardTitle>Utilisation basique</CardTitle>
              <CardDescription>
                Exemples d'utilisation de base de SQLGenix
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-4 rounded-lg">
                <code>{`<?php
use SQLGenix\\Query;

// Sélection simple
$users = Query::table('users')
    ->where('active', true)
    ->get();

// Jointure avec une autre table
$posts = Query::table('posts')
    ->join('users', 'posts.user_id', '=', 'users.id')
    ->select('posts.*', 'users.name as author')
    ->get();

// Insertion de données
Query::table('users')->insert([
    'name' => 'John Doe',
    'email' => 'john@example.com'
]);`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}