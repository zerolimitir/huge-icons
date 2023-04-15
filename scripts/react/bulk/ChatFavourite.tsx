import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.66 8.075c-.249.112-.4.316-.516.693l-.295.952-.194.62-.997.023c-1.078.024-1.148.037-1.373.249a.884.884 0 0 0-.053 1.243c.08.085.92.735 1.559 1.205.006.005-.116.411-.271.904-.155.493-.293.972-.306 1.065-.091.624.557 1.151 1.123.915.073-.031.472-.31.886-.621.414-.311.776-.557.804-.546.028.011.377.265.775.565.399.3.786.57.86.602.567.236 1.215-.29 1.124-.915-.013-.093-.151-.572-.306-1.065a17.565 17.565 0 0 1-.271-.904c.639-.47 1.479-1.12 1.559-1.205a.884.884 0 0 0-.053-1.243c-.225-.212-.295-.225-1.373-.249l-.997-.023-.206-.66-.297-.946a1.572 1.572 0 0 0-.214-.435.825.825 0 0 0-.968-.224'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatFavourite);
export default ForwardRef;
