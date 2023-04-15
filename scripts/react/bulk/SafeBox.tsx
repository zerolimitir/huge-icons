import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSafeBox = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.438 6.075a1.984 1.984 0 0 0-.872.542 1.955 1.955 0 0 0-.502.86C6.007 7.671 6 8.157 6 12c0 4.703-.011 4.463.23 4.939.138.273.527.667.802.813.494.261.227.248 4.968.248 4.703 0 4.463.011 4.939-.23.273-.138.667-.527.813-.802.261-.494.248-.227.248-4.968s.013-4.474-.248-4.968c-.146-.275-.54-.664-.813-.802-.476-.241-.233-.23-4.956-.228-4.029.002-4.338.007-4.545.073m4.882 3.966c.555.087 1.095.458 1.394.959l.155.26 1.195.02c1.145.019 1.202.024 1.338.108.424.264.424.96 0 1.224-.136.084-.193.089-1.338.108l-1.195.02-.155.26a1.984 1.984 0 0 1-.845.778c-1.426.696-3.045-.478-2.83-2.053.13-.958.924-1.662 1.941-1.72a2.76 2.76 0 0 1 .34.036'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSafeBox);
export default ForwardRef;
