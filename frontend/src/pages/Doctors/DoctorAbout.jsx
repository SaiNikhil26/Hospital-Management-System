import React from 'react'
import { formatDate } from '../../utils/formatDate'

const DoctorAbout = () => {
  return <div>
    <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of
        <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Dev</span>
        </h3>
        <p className='text_para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corporis, iusto est 
            perspiciatis recusandae optio veritatis ducimus libero quos animi.
        </p>
    </div>
    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
        <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor leading-6 font-semibold'>
                        {formatDate('01-01-2006')} - {formatDate('01-01-2010')}
                    </span>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                        PHD in Surgery
                    </p>
                </div>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                        New Apollo Hospital, New York.
                    </p>
            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor leading-6 font-semibold'>
                        {formatDate('12-04-2010')} - {formatDate('12-04-2012')}
                    </span>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                        PHD in Surgery
                    </p>
                </div>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                        New Apollo Hospital, New York.
                    </p>
            </li>
        </ul>
    </div>




    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowcolor text-[15px] leading-6 font-semibold'>
                    {formatDate('02-02-2013')} - {formatDate('06-06-2016')}
                </span>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                        Sr. Surgeon
                    </p>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                        New Apollo Hospital, New York.
                    </p>
            </li>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowcolor text-[15px] leading-6 font-semibold'>
                    {formatDate('01-08-2016')} - {formatDate('06-06-2019')}
                </span>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                        Sr. Surgeon
                    </p>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                        New Apollo Hospital, New York.
                    </p>
            </li>
        </ul>
    </div>
  </div>
}

export default DoctorAbout