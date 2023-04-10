import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChemistryCylindrical = (
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
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M11 2h8' />
        <path
            fill='currentColor'
            d='M12 2v-.75h-.75V2H12Zm6 0h.75v-.75H18V2ZM6.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 20a.75.75 0 0 0 1.5 0h-1.5ZM4 7.25a.75.75 0 0 0 0 1.5v-1.5Zm16 1.5a.75.75 0 0 0 0-1.5v1.5ZM4 21.25a.75.75 0 0 0 0 1.5v-1.5Zm16 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8-20h6v-1.5h-6v1.5ZM17.25 2v13h1.5V2h-1.5Zm-4.5 13V2h-1.5v13h1.5ZM15 17.25A2.25 2.25 0 0 1 12.75 15h-1.5A3.75 3.75 0 0 0 15 18.75v-1.5ZM17.25 15A2.25 2.25 0 0 1 15 17.25v1.5A3.75 3.75 0 0 0 18.75 15h-1.5Zm-12-13v20h1.5V2h-1.5ZM4 8.75h16v-1.5H4v1.5Zm0 14h16v-1.5H4v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChemistryCylindrical);
export default ForwardRef;
