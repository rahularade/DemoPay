export function Features(){
    return (
    <div className="py-20 px-6 border-t-2 border-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          title="Instant Transfer" 
          description="Send virtual money to friends instantly. No banking servers, just pure code execution." 
        />
        <FeatureCard 
          title="100% Secure" 
          description="Since the money isn't real, you literally cannot lose anything. The safest investment ever." 
        />
        <FeatureCard 
          title="Simple Balance" 
          description="Track your mock fortunes. Sign up today and get a completely random joining balance to start." 
        />
      </div>
    </div>
  );
}

function FeatureCard({title, description} : {title: string, description: string}){
    return <div className="p-8 border-2 border-black hover:bg-black hover:text-white transition-colors group rounded-lg">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="font-medium opacity-80">{description}</p>
  </div>
}