import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBackpack = (
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
            d='M14.25 5a.75.75 0 0 0 1.5 0h-1.5Zm-6 0a.75.75 0 0 0 1.5 0h-1.5ZM19 12v-.75a.75.75 0 0 0-.75.75H19Zm0 8h-.75c0 .414.336.75.75.75V20ZM5 12h.75a.75.75 0 0 0-.75-.75V12Zm0 8v.75a.75.75 0 0 0 .75-.75H5Zm6-10.75a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8.322 4.573a.75.75 0 1 0 .644 1.354l-.644-1.354Zm14 1.354a.75.75 0 0 0 .645-1.354l-.646 1.354ZM11 5.75h2v-1.5h-2v1.5ZM18.25 11v7h1.5v-7h-1.5ZM15 21.25H9v1.5h6v-1.5ZM5.75 18v-7h-1.5v7h1.5ZM9 21.25A3.25 3.25 0 0 1 5.75 18h-1.5A4.75 4.75 0 0 0 9 22.75v-1.5ZM18.25 18A3.25 3.25 0 0 1 15 21.25v1.5A4.75 4.75 0 0 0 19.75 18h-1.5ZM13 5.75c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 13 4.25v1.5Zm-2-1.5A6.75 6.75 0 0 0 4.25 11h1.5c0-2.9 2.35-5.25 5.25-5.25v-1.5Zm0-1.5h2v-1.5h-2v1.5ZM14.25 4v1h1.5V4h-1.5Zm-4.5 1V4h-1.5v1h1.5ZM13 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 13 1.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 8.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM21.25 15v3h1.5v-3h-1.5ZM20 19.25h-1v1.5h1v-1.5Zm-.25.75v-8h-1.5v8h1.5Zm1.5-2c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 18h-1.5ZM19 12.75A2.25 2.25 0 0 1 21.25 15h1.5A3.75 3.75 0 0 0 19 11.25v1.5ZM4.25 12v8h1.5v-8h-1.5ZM5 19.25H4v1.5h1v-1.5ZM2.75 18v-3h-1.5v3h1.5ZM4 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 20.75v-1.5Zm1-8A3.75 3.75 0 0 0 1.25 15h1.5A2.25 2.25 0 0 1 5 12.75v-1.5Zm6-.5h2v-1.5h-2v1.5Zm-5.678 5.927C8.088 15.36 10.067 14.75 12 14.75c1.933 0 3.912.61 6.677 1.927l.646-1.354c-2.835-1.35-5.056-2.073-7.323-2.073-2.267 0-4.488.723-7.322 2.073l.644 1.354Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBackpack);
export default ForwardRef;
