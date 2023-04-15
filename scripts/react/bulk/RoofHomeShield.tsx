import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeShield = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.483 9.292c-.255.061-2.422 1.146-2.682 1.342a1.92 1.92 0 0 0-.746 1.177c-.048.232-.051.377-.014.845.175 2.253.664 3.454 1.917 4.706.947.945 1.396 1.212 2.042 1.212.601 0 1.013-.226 1.851-1.015 1.251-1.177 1.819-2.389 2.047-4.365.158-1.37.044-1.865-.56-2.43-.237-.221-.394-.312-1.452-.838-.652-.324-1.282-.611-1.399-.637a2.893 2.893 0 0 0-1.004.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeShield);
export default ForwardRef;
