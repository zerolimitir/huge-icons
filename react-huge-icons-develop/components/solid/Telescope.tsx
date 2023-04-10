import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTelescope = (
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
            d='M17.133 2.213c-.735.438-.986 1.408-.562 2.166l2.561 4.579a1.511 1.511 0 0 0 2.1.58c.734-.438.986-1.408.562-2.166l-2.561-4.579a1.51 1.51 0 0 0-2.1-.58ZM15.06 4.67 7.443 9.208c-.98.584-1.316 1.877-.75 2.889l.146.261-.018.01-3.774 2.25-.392-.702a.75.75 0 0 0-1.31.733l1.537 2.747a.75.75 0 0 0 1.31-.733l-.413-.736 3.792-2.26.146.261c.566 1.012 1.819 1.358 2.8.774l1.37-.816L7.9 21.658a.75.75 0 0 0 1.335.684l4.455-8.686 4.455 8.686a.75.75 0 0 0 1.335-.684l-4.83-9.418 3.494-2.083a2.941 2.941 0 0 1-.32-.467l-2.562-4.578a3.125 3.125 0 0 1-.204-.442Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTelescope);
export default ForwardRef;
