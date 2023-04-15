import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.28 9.082c-1.852.478-2.804 2.502-1.985 4.218a3.01 3.01 0 0 0 3.982 1.418l.257-.12.563.556c.514.508.58.56.759.598a.75.75 0 0 0 .886-.533c.052-.179.052-.226 0-.399-.05-.167-.139-.277-.602-.74l-.543-.544.12-.258A3.01 3.01 0 0 0 13.3 9.295c-.621-.296-1.386-.377-2.02-.213'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatSearch);
export default ForwardRef;
