import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletOpenLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.42 2.044a4.83 4.83 0 0 0-.579.139 3.972 3.972 0 0 0-2.653 2.639C2.09 5.132 2 5.641 2 5.883V6h14v-.091c0-.243-.094-.789-.186-1.082a4.006 4.006 0 0 0-3.269-2.784c-.375-.052-6.759-.051-7.125.001m12.018 10.031a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.264.254.514.399.861.503.188.055.507.064 2.37.064H22v-4l-2.17.002c-1.966.002-2.191.009-2.392.073'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletOpenLeft);
export default ForwardRef;
