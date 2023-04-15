import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShoppingBasketCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.38 6.044a4.657 4.657 0 0 0-1.16.366 4.044 4.044 0 0 0-2.202 3.261L1.99 10h20.02l-.028-.329c-.163-1.863-1.578-3.375-3.397-3.628-.378-.052-12.836-.052-13.205.001m9.314 7.273c-.133.061-.473.425-1.674 1.798-.829.947-1.543 1.733-1.586 1.747-.102.032-.133.011-1.174-.821-.487-.39-.946-.729-1.019-.755a.686.686 0 0 0-.543.029.757.757 0 0 0-.337 1.078c.043.069.539.495 1.103.945 1.156.923 1.261.982 1.82 1.012.582.032.978-.132 1.411-.583.356-.373 2.87-3.258 2.948-3.384.23-.371.066-.883-.341-1.068a.687.687 0 0 0-.608.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketCheck);
export default ForwardRef;
