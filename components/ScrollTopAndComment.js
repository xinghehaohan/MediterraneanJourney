import { useEffect, useState } from 'react'
import { ClapButton } from '@lyket/react'
import ScrollTop from '@/components/ScrollTop'

const ScrollTopAndComment = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  return (
    <>
      <div
        className={`fixed right-8 bottom-9 hidden flex-col gap-6 ${show ? 'md:flex' : 'md:hidden'}`}
      >
        <button className="mb-16">
        {/* To create a button you just need to provide a React component that has an ID, namespace and type.

Once you added this element a GET request is made to retrieve info about the button with that certain ID and namespace. If no button is found, a new resource is created with the ID/namespace identifier. */}
          {/* <ClapButton id="diy-fish-holder" namespace="post" hideCounterIfLessThan={1} /> */}
        </button>
      </div>
      <ScrollTop />
    </>
  )
}

export default ScrollTopAndComment
