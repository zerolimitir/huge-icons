import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFlashRound = (
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
            d='m12.25 2.476-.601-.448.601.448Zm-6.998 9.38-.601-.448.601.448Zm6.498 9.668-.601-.448.601.448Zm6.998-9.38-.601-.449.6.449Zm-7.1-10.116-6.997 9.38 1.202.897 6.998-9.38-1.202-.897ZM6.179 14.6H8.47v-1.5H6.18v1.5Zm2.719.485v5.677h1.5v-5.677h-1.5Zm3.454 6.886 6.998-9.38-1.202-.897-6.998 9.38 1.202.897ZM17.821 9.4H15.53v1.5h2.291V9.4Zm-2.718-.485V3.237h-1.5v5.677h1.5Zm.427.485c-.202 0-.427-.183-.427-.485h-1.5c0 1.062.83 1.985 1.927 1.985V9.4Zm3.819 3.193c.933-1.25.137-3.193-1.528-3.193v1.5c.16 0 .299.089.378.26.08.171.07.373-.052.536l1.202.897Zm-10.452 8.17c0 .92.567 1.612 1.288 1.872a1.873 1.873 0 0 0 2.166-.663l-1.202-.896c-.132.176-.3.204-.454.149-.158-.057-.298-.207-.298-.462h-1.5Zm-.427-6.162c.202 0 .427.183.427.485h1.5c0-1.062-.83-1.985-1.927-1.985v1.5Zm-3.819-3.193c-.933 1.25-.137 3.194 1.528 3.194v-1.5c-.16 0-.299-.09-.378-.26a.519.519 0 0 1 .052-.537l-1.202-.897Zm8.2-8.484c.132-.176.3-.204.454-.149.158.057.298.207.298.462h1.5c0-.92-.567-1.612-1.288-1.872a1.873 1.873 0 0 0-2.166.663l1.202.896Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlashRound);
export default ForwardRef;
