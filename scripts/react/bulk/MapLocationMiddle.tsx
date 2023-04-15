import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapLocationMiddle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.34 10.046c-.759.097-1.693.477-2.321.946a4.95 4.95 0 0 0-1.854 5.225c.329 1.304 1.065 2.714 2.031 3.892C10.169 21.294 11.215 22 12 22c1.551 0 3.917-2.717 4.741-5.445.193-.641.238-.943.237-1.615-.001-.559-.015-.695-.109-1.071-.191-.765-.495-1.396-.943-1.957a5.04 5.04 0 0 0-4.586-1.866m1.18 3.053c.397.14.723.471.882.895.131.349.101.82-.073 1.175a1.512 1.512 0 0 1-.729.704c-.187.088-.276.103-.6.103-.324 0-.413-.015-.6-.103a1.512 1.512 0 0 1-.729-.704 1.569 1.569 0 0 1-.071-1.18 1.472 1.472 0 0 1 1.48-.971c.143.01.341.046.44.081'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocationMiddle);
export default ForwardRef;
