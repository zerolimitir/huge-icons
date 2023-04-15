import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShoppingBasketArrowOut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.38 6.044a4.657 4.657 0 0 0-1.16.366 4.044 4.044 0 0 0-2.202 3.261L1.99 10h20.02l-.028-.329c-.163-1.863-1.578-3.375-3.397-3.628-.378-.052-12.836-.052-13.205.001m6.26 6.24c-.418.082-.658.251-1.435 1.013-.405.398-.788.803-.851.901-.393.612.245 1.381.914 1.101.08-.033.331-.243.557-.466l.413-.406.011 2.199.011 2.2.11.166c.291.44.969.44 1.26 0l.11-.166.011-2.199.012-2.2.412.406c.227.223.477.433.557.466.669.28 1.307-.489.914-1.101-.063-.098-.446-.503-.851-.901-.596-.585-.787-.748-.996-.85a1.734 1.734 0 0 0-1.159-.163'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketArrowOut);
export default ForwardRef;
