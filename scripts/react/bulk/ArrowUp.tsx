import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.742 5.3c-.123.044-.617.514-2.253 2.148-1.152 1.151-2.129 2.159-2.172 2.24a.847.847 0 0 0-.077.332c0 .551.557.899 1.06.663.107-.05.751-.668 1.932-1.851l1.771-1.776 1.769 1.777c1.19 1.196 1.82 1.801 1.928 1.851a.734.734 0 0 0 1.06-.664.847.847 0 0 0-.077-.332c-.043-.081-1.028-1.096-2.19-2.255-1.804-1.799-2.136-2.113-2.273-2.149-.205-.056-.285-.053-.478.016'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;
