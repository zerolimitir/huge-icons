import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWarehouse = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M3.706 6.806A4 4 0 0 0 2 10.082V20a2 2 0 0 0 2 2h1.25v-9A2.75 2.75 0 0 1 8 10.25h8A2.75 2.75 0 0 1 18.75 13v9H20a2 2 0 0 0 2-2v-9.918a4 4 0 0 0-1.706-3.276l-6-4.2a4 4 0 0 0-4.588 0l-6 4.2ZM17.25 22v-2.25H6.75V22h10.5Zm-10.5-3.75v-2.5h10.5v2.5H6.75Zm0-4h10.5V13c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25v1.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWarehouse);
export default ForwardRef;
