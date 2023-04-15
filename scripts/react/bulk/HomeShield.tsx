import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeShield = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.483 9.292c-.255.061-2.422 1.146-2.682 1.342a1.92 1.92 0 0 0-.746 1.177c-.048.232-.051.377-.014.845.175 2.253.664 3.454 1.917 4.706.947.945 1.396 1.212 2.042 1.212.642 0 1.092-.266 2.021-1.193 1.148-1.147 1.657-2.282 1.877-4.187.158-1.368.044-1.865-.557-2.427-.233-.219-.397-.313-1.452-.838-.654-.326-1.285-.614-1.402-.641a2.918 2.918 0 0 0-1.004.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeShield);
export default ForwardRef;
