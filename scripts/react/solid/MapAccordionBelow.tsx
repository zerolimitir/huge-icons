import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapAccordionBelow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8.76 8.463c0 3.507.004 6.378.01 6.378l.329.059c.175.031.32.053.323.048.002-.004.043-.211.091-.46.106-.546.198-.831.426-1.315.22-.467.48-.869.823-1.274.982-1.16 2.538-1.932 4.048-2.009l.431-.021-.011-2.282-.01-2.282-.287-.048c-.847-.143-1.585-.536-2.953-1.574-1.425-1.082-2.121-1.439-3.07-1.576l-.15-.022v6.378M6.84 2.378c-.861.295-1.687.711-2.74 1.382-.576.367-1.329.908-1.55 1.114-.216.201-.442.617-.508.935-.03.148-.04 1.739-.033 5.291l.011 5.08.11.187c.207.352.577.562.99.562.274 0 .445-.068.879-.349a18.325 18.325 0 0 1 1.621-.93c.435-.217 1.24-.544 1.453-.589.073-.016.14-.049.15-.075.01-.025.013-2.902.007-6.392l-.01-6.347-.38.131m13.94.84a1.404 1.404 0 0 1-.182.039c-.079.013-.38.175-.68.366-1.051.669-2.115 1.201-2.849 1.423l-.309.094.01 2.455.01 2.454.34.112c2.217.725 3.811 2.717 3.946 4.929.019.305.041.43.077.43.086 0 .511-.451.626-.664.241-.449.231-.201.231-5.734l-.001-5.062-.093-.2a1.162 1.162 0 0 0-.564-.542c-.161-.071-.486-.128-.562-.1m-6.06 8.021c-1.904.247-3.408 1.538-3.844 3.301a4.916 4.916 0 0 0-.079 1.56c.239 1.809 1.429 4.081 2.68 5.115 1.324 1.096 2.454 1.038 3.753-.191 1.25-1.184 2.328-3.391 2.486-5.094.184-1.986-1.039-3.821-2.981-4.473-.6-.201-1.442-.292-2.015-.218m1.054 2.762c.306.115.557.35.715.67.115.235.131.306.13.588-.001.529-.243.935-.706 1.181-.212.114-.304.138-.573.152-.42.021-.713-.084-1.004-.359-.731-.692-.504-1.852.44-2.241.238-.098.723-.094.998.009'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapAccordionBelow);
export default ForwardRef;