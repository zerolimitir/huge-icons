import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionUpDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.811 6.278c-.163.04.016-.098-2.911 2.245-1.385 1.109-2.508 2.036-2.544 2.101-.311.559.187 1.239.804 1.1.198-.044.007.101 2.65-2.013L12 7.959l2.19 1.752c1.205.963 2.257 1.802 2.339 1.864.671.508 1.524-.258 1.098-.986-.046-.078-5.145-4.183-5.293-4.261-.114-.06-.379-.085-.523-.05m0 6c-.163.04.016-.098-2.911 2.245-1.385 1.109-2.508 2.036-2.544 2.101-.311.559.187 1.239.804 1.1.198-.044.007.101 2.65-2.013L12 13.959l2.19 1.752c1.205.963 2.257 1.802 2.339 1.864.671.508 1.524-.258 1.098-.986-.046-.078-5.145-4.183-5.293-4.261-.114-.06-.379-.085-.523-.05'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionUpDouble);
export default ForwardRef;
