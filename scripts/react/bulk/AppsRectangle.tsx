import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAppsRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.62 14.04c-.706.151-1.25.624-1.514 1.316-.081.213-.085.291-.085 1.644 0 1.363.004 1.429.087 1.65a2.11 2.11 0 0 0 1.248 1.244c.213.081.291.085 1.644.085s1.431-.004 1.644-.085a2.11 2.11 0 0 0 1.248-1.244c.083-.221.087-.287.087-1.65 0-1.353-.004-1.431-.085-1.644a2.101 2.101 0 0 0-1.244-1.246c-.216-.081-.311-.086-1.55-.095-.726-.005-1.392.006-1.48.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAppsRectangle);
export default ForwardRef;
