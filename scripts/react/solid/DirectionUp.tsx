import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 9.278c-.163.04.019-.101-2.92 2.25-1.661 1.329-2.511 2.034-2.557 2.121a.859.859 0 0 0-.071.355.735.735 0 0 0 .927.719c.117-.032.772-.533 2.484-1.903L12 10.96l2.326 1.86c1.712 1.37 2.367 1.871 2.484 1.903a.736.736 0 0 0 .928-.719.722.722 0 0 0-.079-.36c-.051-.088-.992-.867-2.665-2.207a196.91 196.91 0 0 0-2.66-2.109c-.114-.06-.379-.085-.523-.05'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionUp);
export default ForwardRef;
