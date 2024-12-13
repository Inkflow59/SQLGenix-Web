export function CodeExampleSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Code Example</h2>
        <div className="max-w-3xl mx-auto">
          <pre className="p-4 rounded-lg bg-card border overflow-x-auto shadow-lg">
            <code className="text-sm">
{`<?php
use SQLGenix\\Query;

// Simple query creation
$query = new Query()
    ->select('users.*, posts.title')
    ->from('users')
    ->join('posts', 'users.id = posts.user_id')
    ->where('users.active', '=', true)
    ->orderBy('users.created_at', 'DESC');

// Query execution
$results = $query->get();`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}