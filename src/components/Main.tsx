import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react';
import { DataType } from '../types';
import { schema } from '../schema';



const Main = () => {
    const [isGreen, setIsGreen] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<DataType>({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: DataType) => {
        console.log(data)
        setIsGreen(true)
    }


    return (
        <section className='main pt-[88px]  flex flex-col w-[87.2%] gap-[64px] items-center justify-center lg:flex-row lg:w-[1110px]  lg:gap-[45px] lg:pt-0'>
            <header className="text flex flex-col gap-4 items-center justify-center lg:w-[47.29%]  lg:items-start lg:text-[50px] lg:font-bold lg:leading-[1.1]">
                <h1 className='text-[28px] text-center tracking-[-0.29px] leading-[1.28] text-white lg:text-[50px] lg:text-left'>Learn to code by watching others</h1>
                <p className='text-center text-base font-normal text-white lg:text-left'>See how experienced developers solve problems in real-time. Watching scripted
                    tutorials is great, but understanding how developers think is invaluable. </p>
            </header>
            <section className='formWrapper flex flex-col gap-6 lg:w-[48.64%]'>
                <div className='purple px-[67px] py-[18px] bg-[var(--purple)] rounded-[10px] text-white shadow-lg'>
                    <p className='font-normal text-[15px] leading-[1.73] text-center lg:tracking-[-0.52px] '>
                        <span className='font-bold'>Try it free 7 days </span>
                        then $20/mo. thereafter</p>


                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='bg-white rounded-[10px] overflow-hidden flex flex-col gap-5 pt-6 mb-2 px-6 lg:pt-8' action="">
                    <div className="inputWrapper flex flex-col relative ">

                        <input
                            placeholder='Name'
                            type="text"
                            {...register('name')}
                            className='w-full  outline-none border border-[#DEDEDE] py-[15px] pl-8 rounded-[5px] text-sm text-[var(--dark)]'
                            style={{
                                border: isGreen ? '1px solid #38CC8B' : errors.name ? '1px solid red' : ''
                            }}
                        />
                        {errors.name &&
                            <span className='font-light text-[11px] text-[var(--coral)] text-right italic absolute top-[105%] right-0'>
                                {errors.name.message}
                            </span>
                        }
                        {errors.name &&
                            <img className='w-5 h-5 lg:w-6 lg:h-6 absolute top-[26%] right-[2%] lg:right-[4%]' src='/assets/Group11.png' alt={'!'} />}
                    </div>
                    <div className="inputWrapper flex flex-col relative ">
                        <input
                            placeholder='Last Name'
                            type="text"
                            {...register('lastName')}
                            className='w-full  outline-none border border-[#DEDEDE] py-[15px] pl-8 rounded-[5px] text-sm text-[var(--dark)]'
                            style={{
                                border: isGreen ? '1px solid #38CC8B' : errors.name ? '1px solid red' : ''
                            }}
                        />
                        {errors.lastName?.message &&
                            <span className='font-light text-[11px] text-[var(--coral)] text-right italic absolute top-[105%] right-0' >
                                {errors.lastName.message}</span>}
                        {errors.lastName &&
                            <img className='w-5 h-5 lg:w-6 lg:h-6 absolute top-[26%] right-[2%] lg:right-[4%]' src='/assets/Group11.png' alt={'!'} />}
                    </div>
                    <div className="inputWrapper flex flex-col relative ">
                        <input
                            placeholder='Email'
                            type="email"
                            {...register('email')}
                            className='w-full  outline-none border border-[#DEDEDE] py-[15px] pl-8 rounded-[5px] text-sm text-[var(--dark)]'
                            style={{
                                border: isGreen ? '1px solid #38CC8B' : errors.name ? '1px solid red' : ''
                            }}
                        />
                        {errors.email?.message &&
                            <span className='font-light text-[11px] text-[var(--coral)] text-right italic absolute top-[105%] right-0' >
                                {errors.email.message}</span>}
                        {errors.email &&
                            <img className='w-5 h-5 lg:w-6 lg:h-6 absolute top-[26%] right-[2%] lg:right-[4%]' src='/assets/Group11.png' alt={'!'} />}
                    </div>

                    <div className="inputWrapper flex flex-col relative ">
                        <input
                            placeholder='Password'
                            type="password"
                            {...register('password')}
                            className='w-full  outline-none border border-[#DEDEDE] py-[15px] pl-8 rounded-[5px] text-sm text-[var(--dark)]'
                            style={{
                                border: isGreen ? '1px solid #38CC8B' : errors.name ? '1px solid red' : ''
                            }}
                        />
                        {errors.password &&
                            <span className='font-light text-[11px] text-[var(--coral)] text-right italic absolute top-[105%] right-0' >
                                {errors.password?.message}</span>
                        }
                        {errors.password &&
                            <img className='w-5 h-5 lg:w-6 lg:h-6 absolute top-[26%] right-[2%] lg:right-[4%]' src='/assets/Group11.png' alt={'!'} />}
                    </div>
                    <button className='bg-[var(--green)] rounded-[5px] uppercase text-white py-[15px] shadow-lg hover:bg-[#77E2B3] duration-200 scale-95'>CLAIM YOUR FREE TRIAL</button>
                    <h5 className='text-[11px] text-[#BAB7D4] leading-[1.9] text-center mb-6 px-[15px] '>By clicking the button, you are agreeing to our
                        <span className='text-[var(--coral)] font-bold'> Terms and Services </span></h5>
                </form>
            </section>
        </section>
    )
}

export default Main