import { Card, CardContent } from "@/components/ui/card"

export default function VideoSection() {
  const videoId = "dQw4w9WgXcQ" // Replace this with your actual YouTube video ID

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[black] to-[green]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Check out our fun introductory video
        </h2>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

