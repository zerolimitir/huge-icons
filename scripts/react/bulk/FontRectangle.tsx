import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFontRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.72 5.304c-.18.078-.31.2-.399.376-.166.327-5.049 12.099-5.069 12.219-.044.271.183.653.456.767.313.131.733.016.911-.248.045-.066.413-.917.817-1.889l.736-1.769h5.656l.736 1.769c.404.972.772 1.823.817 1.889.178.264.598.379.911.248.277-.116.507-.521.452-.796-.023-.115-4.929-11.922-5.065-12.19-.186-.367-.603-.531-.959-.376m1.386 5.326 1.079 2.59-1.092.011c-.601.005-1.585.005-2.186 0l-1.092-.011 1.079-2.59c.593-1.425 1.091-2.59 1.106-2.59.015 0 .513 1.165 1.106 2.59'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFontRectangle);
export default ForwardRef;
