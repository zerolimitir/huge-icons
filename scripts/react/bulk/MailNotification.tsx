import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMailNotification = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.42 3.044c-.802.115-1.652.544-2.242 1.134-1.58 1.58-1.565 4.148.033 5.689a3.993 3.993 0 0 0 5.611-.045 3.997 3.997 0 0 0 0-5.644 4.036 4.036 0 0 0-3.402-1.134M5.7 11.316c-.38.175-.552.587-.398.954a.932.932 0 0 0 .13.224c.093.106 2.227 1.708 2.568 1.928a4.33 4.33 0 0 0 1.126.488c.358.098 1.39.098 1.748 0A4.33 4.33 0 0 0 12 14.422c.341-.22 2.475-1.822 2.568-1.928.5-.564-.098-1.455-.81-1.207-.073.025-.675.452-1.336.947-1.242.932-1.476 1.079-1.88 1.184A2.307 2.307 0 0 1 9 13.246c-.121-.061-.761-.516-1.422-1.012-.661-.495-1.263-.922-1.336-.947a.675.675 0 0 0-.542.029'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailNotification);
export default ForwardRef;
