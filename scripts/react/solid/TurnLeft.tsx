import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTurnLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.313 2.062c-.602.094-1.154.313-1.733.689-.209.136-1.069.968-3.373 3.266C4.41 7.808 3.012 9.234 2.87 9.42a4.831 4.831 0 0 0-.738 1.527c-.094.35-.106.466-.106 1.053 0 .586.012.704.105 1.051.125.464.396 1.054.654 1.423.246.351 6.203 6.326 6.635 6.655a4.802 4.802 0 0 0 1.527.739c.35.094.466.106 1.053.106.586 0 .704-.012 1.051-.105a5.096 5.096 0 0 0 1.423-.654c.316-.222 6.203-6.075 6.592-6.555.325-.4.657-1.065.801-1.6.096-.357.107-.47.107-1.06 0-.586-.012-.704-.105-1.051a5.096 5.096 0 0 0-.654-1.423c-.221-.315-6.079-6.206-6.544-6.582a4.297 4.297 0 0 0-3.358-.882m-.41 5.299c.204.099.37.335.402.573.037.271-.087.497-.508.927l-.362.369.992.021c1.105.024 1.308.057 1.775.287a2.72 2.72 0 0 1 1.26 1.26c.278.564.278.559.278 3.129v2.306l-.121.172c-.166.236-.346.334-.619.334s-.453-.097-.619-.334l-.121-.172-.02-2.286c-.02-2.234-.022-2.291-.106-2.473a1.356 1.356 0 0 0-.597-.597c-.189-.093-.234-.097-1.157-.109l-.96-.011.388.391c.555.56.648.805.453 1.194a.696.696 0 0 1-.578.409c-.346.033-.407-.01-1.31-.922-.921-.93-1.012-1.06-1.092-1.563a1.584 1.584 0 0 1 0-.532c.08-.498.175-.636 1.055-1.529.442-.448.858-.839.924-.868a.837.837 0 0 1 .643.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTurnLeft);
export default ForwardRef;
