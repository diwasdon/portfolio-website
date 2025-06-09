"use client"

export function Footer() {
	return (
		<footer className="bg-muted/30 border-t py-6">
					<p className="text-sm text-center text-muted-foreground">
						© {new Date().getFullYear()} Diwas Sapkota. All rights reserved.
					</p>
		</footer>
	)
}