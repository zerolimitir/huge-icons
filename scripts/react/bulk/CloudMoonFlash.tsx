import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudMoonFlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.56 2.025c-1.631.154-3.062 1.074-3.913 2.517-.092.156-.167.309-.167.34 0 .032.086.106.19.165.267.15.781.539 1.107.839.552.506 1.118 1.266 1.48 1.988.168.334.197.371.275.348a4.929 4.929 0 0 1 1.428-.198c.649-.003.998.047 1.56.225.797.253 1.423.643 2.055 1.281l.435.439.093-.115c.283-.349.659-1.242.803-1.903.1-.458.099-1.439-.002-1.911-.434-2.025-1.942-3.527-3.95-3.937a6.957 6.957 0 0 0-1.394-.078m-6.065 12.973L8.01 17.98l1.495.01 1.494.011.011 1.986.01 1.986 2.485-2.976 2.485-2.977-1.495-.01-1.494-.011-.011-1.991-.01-1.992-2.485 2.982'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonFlash);
export default ForwardRef;
