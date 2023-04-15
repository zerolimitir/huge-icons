import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShoppingBasketArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.38 6.044a4.657 4.657 0 0 0-1.16.366 4.044 4.044 0 0 0-2.202 3.261L1.99 10h20.02l-.028-.329c-.163-1.863-1.578-3.375-3.397-3.628-.378-.052-12.836-.052-13.205.001m6.32 6.272a.734.734 0 0 0-.398.413c-.053.128-.062.448-.062 2.296v2.148l-.454-.444c-.491-.479-.569-.519-.931-.478-.211.023-.429.18-.541.389a.857.857 0 0 0-.013.656c.033.071.425.491.87.934.709.706.844.821 1.089.938.266.126.302.132.74.132s.474-.006.74-.132c.245-.116.379-.232 1.069-.918.434-.432.817-.843.85-.914a.935.935 0 0 0 .018-.603c-.101-.27-.382-.453-.693-.453-.279 0-.371.056-.812.49l-.412.405-.001-2.157c-.001-2.013-.006-2.169-.075-2.318-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketArrowDown);
export default ForwardRef;
