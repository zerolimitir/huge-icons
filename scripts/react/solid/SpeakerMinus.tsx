import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpeakerMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.56 4.056c-.121.027-.31.093-.42.145-.11.053-1.208.852-2.44 1.776-1.232.923-2.313 1.72-2.402 1.77-.406.228-.399.227-2.118.253-1.556.023-1.607.026-1.84.117-.677.265-1.158.813-1.296 1.475-.061.292-.061 4.524 0 4.816.114.546.562 1.135 1.036 1.364.442.212.582.228 2.063.228 1.421 0 1.638.018 1.987.168.124.053 1.163.804 2.53 1.827 1.276.956 2.401 1.774 2.5 1.818.277.123.556.186.822.187.929.001 1.786-.69 1.974-1.592.062-.299.062-12.517 0-12.816a2.016 2.016 0 0 0-1.083-1.372c-.459-.217-.855-.267-1.313-.164m4.534 7.221c-.509.125-.74.674-.469 1.111.07.112.178.218.275.268.156.082.219.084 2.28.096 1.435.008 2.168-.002 2.268-.031.299-.087.549-.41.551-.712.002-.262-.173-.547-.419-.683-.107-.059-.35-.067-2.24-.073-1.166-.003-2.177.007-2.246.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeakerMinus);
export default ForwardRef;