const navigation = {
  main: [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  
}

export default function Example() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-10 lg:px-8">
        <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          {navigation.main.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-900">
              {item.name}
            </a>
          ))}
        </nav>
        
        <p className="mt-10 text-center text-sm/6 text-gray-600">&copy; {new Date().getFullYear()} BYK Oxford Ltd. All rights reserved.</p>
      </div>
    </footer>
  )
}
