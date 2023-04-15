import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFolderOpenCrooked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.753 3.041c-1.391.235-2.488 1.369-2.712 2.806-.033.213-.042 1.943-.033 6.333l.012 6.04.11.352c.061.193.171.472.246.62.134.266.486.769.537.767.015 0 .701-1.526 1.524-3.39 1.944-4.399 1.993-4.505 2.256-4.9a4.329 4.329 0 0 1 2.935-1.866c.191-.029 1.863-.043 4.99-.043h4.702v-.733c0-.403-.019-.839-.042-.97-.235-1.328-1.161-2.364-2.418-2.705-.304-.082-.431-.088-2.52-.112-2.398-.027-2.364-.024-2.909-.273-.138-.064-.791-.445-1.451-.849-.66-.403-1.335-.792-1.5-.864-.499-.217-.839-.255-2.275-.249-.696.002-1.349.019-1.452.036'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpenCrooked);
export default ForwardRef;
