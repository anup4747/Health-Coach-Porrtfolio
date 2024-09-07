import maintainance from '../assets/maintainance.png'
import testimony1 from '../assets/result1.png'
import testimony2 from '../assets/result2.png'
import testimony3 from '../assets/result3.png'
import testimony4 from '../assets/result4.png'
export default function Testimonies() {

    return (
        
      <section id = "Testimonies">
      <div className="container mx-auto px-6 md:px-36">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Testimonies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="w-full h-full">
            <img src={testimony1} alt="Gallery Image 1" className="object-cover w-full h-full rounded-lg shadow-lg"/>
          </div>
          <div className="w-full h-full">
            <img src={testimony2} alt="Gallery Image 2" className="object-cover w-full h-full rounded-lg shadow-lg"/>
          </div>
          <div className="w-full h-full">
            <img src={testimony3} alt="Gallery Image 3" className="object-cover w-full h-full rounded-lg shadow-lg"/>
          </div>
          <div className="w-full h-full">
            <img src={testimony4} alt="Gallery Image 4" className="object-cover w-full h-full rounded-lg shadow-lg"/>
          </div>
          <div className="w-full h-full">
            <img src={maintainance} alt="Gallery Image 5" className="object-cover w-full h-full rounded-lg shadow-lg"/>
          </div>
          <div className="w-full h-full">
            <img src={maintainance} alt="Gallery Image 6" className="object-cover w-full h-full rounded-lg shadow-lg"/>
          </div>
          <div className="w-full h-full">
            <img src={maintainance} alt="Gallery Image 7" className="object-cover w-full h-full rounded-lg shadow-lg"/>
          </div>
          <div className="w-full h-full">
            <img src={maintainance} alt="Gallery Image 8" className="object-cover w-full h-full rounded-lg shadow-lg"/>
          </div>
          <div className="w-full h-full">
            <img src={maintainance} alt="Gallery Image 9" className="object-cover w-full h-full rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
    </section>
    )
}