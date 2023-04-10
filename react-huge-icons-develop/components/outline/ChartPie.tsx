import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartPie = (
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
            d='m13.987 2.197.149-.735-.149.735Zm7.815 7.816.736-.148-.736.148ZM9.166 4.954a.75.75 0 1 0-.332-1.462l.332 1.462Zm11.342 10.212a.75.75 0 0 0-1.462-.332l1.462.332ZM13.84 2.933a9.262 9.262 0 0 1 7.228 7.228l1.47-.296a10.762 10.762 0 0 0-8.401-8.403l-.297 1.47ZM20 11.25h-6v1.5h6v-1.5ZM12.75 10V4h-1.5v6h1.5ZM14 11.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 14 12.75v-1.5Zm.136-9.788C12.485 1.13 11.25 2.533 11.25 4h1.5c0-.742.574-1.171 1.089-1.067l.296-1.47Zm6.931 8.699c.104.515-.325 1.089-1.067 1.089v1.5c1.467 0 2.87-1.235 2.538-2.885l-1.47.296ZM11 21.25A8.25 8.25 0 0 1 2.75 13h-1.5A9.75 9.75 0 0 0 11 22.75v-1.5ZM2.75 13a8.253 8.253 0 0 1 6.416-8.046l-.332-1.462C4.492 4.477 1.25 8.359 1.25 13h1.5Zm16.296 1.834A8.254 8.254 0 0 1 11 21.25v1.5c4.641 0 8.523-3.242 9.508-7.584l-1.462-.332Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartPie);
export default ForwardRef;
