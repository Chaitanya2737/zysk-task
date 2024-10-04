import React from 'react'
import Button from './supportComponents/Button';

const Blog = () => {
    const featureItem = [
        {
            id: 1,
            name:"Olivia Rhye",
            image: "https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QKUyo7n7wkv~yjfh1-DF4-jlrmxtPCaXfgo5YDpvC9vDSLCW0Vs7yCm9i8ocGUpwv-W9yXIp6hxU1Xw8ccYydKuoIw6hTv9nE1Cy2dUcbIzP-qAExdGJnx071tIvG6fm-TTSEaCzeOUzc2EHzw8p0lMXmcK6mcNbGiif1fBL4eOcTrsqtqR8Yxz-dL-TQLl9CKQhOOWF3ZgzJnrsWZjpACaBi11a2tIF-yyBPoFYVrrBHr90GywrnQ-O7TTx1dufzTpHtTGwUO7tQglz362WAuwF6QnCi5jNF1ojiJv063H42Hy0bf4yFGM3PUbVyzhm2ufy5k9RAvQyfLPV83U0BQ__",
           role:"Design",
            title: "Share team inboxes",
            date:"20 Jan 2024",

            description:
              "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
          },
          {
            id: 2,
            name:"Phoenix Baker",
            image: "https://s3-alpha-sig.figma.com/img/a4c5/2ab3/a3c522719b54dd45b1795921034a3f00?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NDrIKwVr9Bg-rsBFsi9B0tYlIPDZsLSLlUmJfRznBZpUEnSL~oJB7C~6I-HV~KAeeoodnPMt16eMhdmZknZE-qbUH4NshEPq4YFgvxMQe8FobQppe-8HMHyD8rWsrWV5JhvEMmes~PeG57rtL48JwvFxDtitQCgwcmj97WzhnWYAJVvGvKHwARauC6NVoSL5ucxqDtBlZnft2ctDEVmS01VTj6LrQThfjsvD-6qLHgb-ZpXHjZasoqNHkTqMV1B-WaHisvF1aGB3Zh7oZwgjiyelpnUQAALWNvMzM026oFY9uy9ocdYk0MOAUbLOfQpXBPPUtfCILXQOOtMzdqrxgQ__",
          role:"Product",
            title: "Deliver instant answers",
            date:"19 Jan 2024",
            description:
              "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
          },
          {
            id: 3,
            name:"Lana Steiner",
            image: "https://s3-alpha-sig.figma.com/img/e2d0/7def/1dbd591c5182a37dfedc9ff110ae94d9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Acy1mH9gUr-Hc1TagW9uf6wIFDSuy7cJ6fnNkiPSNztTxsZlhgALceGARFFrKdI4T54CclGP1QSXvtJR23UhUZl9aLYtkDqr1I0q-WCjK5keQzZMYtsTgegZQ3VZpo422uJI6SPrAnyF5CGN3~yey6T67drIFZWV-UpsVa0xozxaDs9vQ9RFIcK-oEfcqQfCpM1kjtligBQlHLV1hqIIFrprOuuU7Sa1MCS6qzgVwkoh0z95IMI0x0HuuEXRJtr9hkSiqcI6YYZboG1Q11t~gwhwn5p7Xfl-75R90B6zU4Lr3VI1WvOgmg5iqRk3IlXae8uopMC0vYpko1u34noJnw__",
          role:"software Engineering",
          date:"18 Jan 2024",
            title: "Manage your team with report",
            description:
              "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.",
          },

      ];
  return (
    <div>
        <div>
            <div className='flex justify-between items-center'>
                <p className='text-violet-700 font-semibold text-lg '>
                    Our blog
                </p>
             <Button className="bg-violet-700 text-white " content="View all post" />
            </div>
            <h1 className='text-2xl  text-primary my-5'>
            Latest blog posts
            </h1>
            <p className='text-md text-gray-500 mb-5'>Tool and strategies modern teams need to help their companies grow.</p>
        </div>
        <div className="mt-10 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {featureItem.map((item) => (
            <div className="text-start  transition-transform transform hover:scale-105">
            <img
              src={item.image}
              className="h-50 w-65 bg-slate-100/20 mx-auto border rounded-lg m-4 p-1"
              alt={item.title}
            />
            <h4 className='text-violet-700 text-md font-semibold '> {item.role}</h4>
            <h2 className="text-primary text-lg  font-semibold mt-2">{item.title}</h2>
            <p className="text-gray-600 text-pretty">{item.description}</p>
            <div className='flex justify-start items-center'>
            {/* <div></div> add image tag and render the folks profile */}
            <div className='my-4'>
                <h1 className='text-md  text-primary'>
                    {item.name}
                </h1>
                <p  className='text-md  text-gray-500'>
                    {item.date}
                </p>
            </div>
            </div>
          </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Blog