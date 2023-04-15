import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRemoveThin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.388 7.133a.734.734 0 0 0-.344.815c.044.181.156.302 1.97 2.122L10.938 12l-1.924 1.93c-1.808 1.814-1.926 1.941-1.969 2.12-.053.22-.032.346.096.57a.735.735 0 0 0 .809.335c.179-.043.306-.161 2.12-1.97l1.931-1.924 1.909 1.908c1.315 1.313 1.956 1.927 2.059 1.97A.735.735 0 0 0 17 16.26a.84.84 0 0 0-.064-.312c-.035-.07-.921-.987-1.969-2.038l-1.906-1.909 1.924-1.931c1.809-1.814 1.927-1.941 1.97-2.12a.726.726 0 0 0-.711-.91.917.917 0 0 0-.336.064c-.07.035-.978.912-2.018 1.95L12 10.94l-1.89-1.886c-1.04-1.038-1.948-1.915-2.018-1.95a.834.834 0 0 0-.704.029'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemoveThin);
export default ForwardRef;
