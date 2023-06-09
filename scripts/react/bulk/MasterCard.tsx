import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMasterCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.34 8.296c-.82.16-1.482.521-2.052 1.121-.465.49-.745.989-.931 1.663-.136.491-.136 1.349 0 1.84.183.661.463 1.168.906 1.637.352.374.672.61 1.115.824.573.276.933.355 1.622.355.691 0 1.049-.079 1.63-.359l.37-.179.37.179c.581.28.939.359 1.63.359.689 0 1.049-.079 1.622-.355 1.003-.485 1.713-1.349 2.021-2.461.136-.491.136-1.349 0-1.84a3.695 3.695 0 0 0-.931-1.663 3.743 3.743 0 0 0-1.792-1.064c-.288-.078-.432-.091-.94-.089-.705.004-1.008.071-1.604.353L12 8.795l-.376-.178a4.95 4.95 0 0 0-.69-.261c-.406-.106-1.201-.136-1.594-.06m1.26 1.542c.252.076.252.074.04.503-.298.602-.378.955-.378 1.659 0 .704.08 1.057.378 1.659.142.289.183.407.148.43-.205.132-.824.181-1.228.096a2.224 2.224 0 0 1-1.74-1.725c-.108-.516-.044-.99.2-1.487.287-.584.877-1.027 1.56-1.175.195-.042.828-.017 1.02.04m4.125.052c.708.258 1.173.739 1.42 1.47.053.159.074.336.074.64 0 .632-.199 1.13-.623 1.56-.868.882-2.298.893-3.167.025-.446-.446-.648-.94-.648-1.585 0-.462.055-.681.273-1.097.26-.496.87-.956 1.437-1.085.358-.082.9-.05 1.234.072'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMasterCard);
export default ForwardRef;
