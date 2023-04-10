import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderReload = (
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
            d='m11.067 3.8-.45.6.45-.6Zm1.866 1.4.45-.6-.45.6Zm-2.182 4.264a.75.75 0 0 0 .498 1.414l-.498-1.414Zm3.37 4.287a.75.75 0 1 0 1.415.498l-1.414-.498Zm-4.243-1.502a.75.75 0 0 0-1.414-.498l1.414.498Zm3.371 4.287a.75.75 0 0 0-.498-1.414l.498 1.415ZM21.25 10v7h1.5v-7h-1.5ZM18 20.25H6v1.5h12v-1.5ZM2.75 17V7h-1.5v10h1.5ZM15.333 6.75H18v-1.5h-2.667v1.5ZM6 3.75h2.667v-1.5H6v1.5Zm4.617.65 1.866 1.4.9-1.2-1.866-1.4-.9 1.2Zm-1.95-.65a3.25 3.25 0 0 1 1.95.65l.9-1.2a4.75 4.75 0 0 0-2.85-.95v1.5Zm6.666 1.5a3.25 3.25 0 0 1-1.95-.65l-.9 1.2a4.75 4.75 0 0 0 2.85.95v-1.5ZM6 20.25A3.25 3.25 0 0 1 2.75 17h-1.5A4.75 4.75 0 0 0 6 21.75v-1.5ZM21.25 17A3.25 3.25 0 0 1 18 20.25v1.5A4.75 4.75 0 0 0 22.75 17h-1.5Zm1.5-7A4.75 4.75 0 0 0 18 5.25v1.5A3.25 3.25 0 0 1 21.25 10h1.5Zm-20-3A3.25 3.25 0 0 1 6 3.75v-1.5A4.75 4.75 0 0 0 1.25 7h1.5Zm8.5 3.878a2.25 2.25 0 0 1 2.341.531l1.06-1.06a3.75 3.75 0 0 0-3.9-.885l.498 1.414Zm2.341.531a2.25 2.25 0 0 1 .53 2.341l1.415.5a3.75 3.75 0 0 0-.884-3.902L13.59 11.41Zm-3.182 3.182a2.25 2.25 0 0 1-.53-2.342l-1.415-.498a3.75 3.75 0 0 0 .884 3.9l1.061-1.06Zm2.342.53a2.25 2.25 0 0 1-2.342-.53l-1.06 1.06a3.75 3.75 0 0 0 3.9.886l-.498-1.415Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderReload);
export default ForwardRef;
