import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDiploma = (
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
            d='M22 5h-.75.75Zm0 10h.75H22ZM2 15h.75H2ZM2 5h-.75H2Zm18-2v-.75V3Zm0 14v-.75.75Zm-.5-.75a.75.75 0 0 0 0 1.5v-1.5Zm-10 1.5a.75.75 0 0 0 0-1.5v1.5ZM4 17v.75V17ZM6 6.25a.75.75 0 0 0 0 1.5v-1.5Zm12 1.5a.75.75 0 0 0 0-1.5v1.5Zm-12 2.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm3.75 5.75a.75.75 0 0 0-1.5 0h1.5ZM13 21h-.75a.75.75 0 0 0 1.085.67L13 21Zm2-1 .335-.67a.75.75 0 0 0-.67 0L15 20Zm2 1-.335.67A.75.75 0 0 0 17.75 21H17Zm.75-3.5a.75.75 0 0 0-1.5 0h1.5ZM21.25 5v10h1.5V5h-1.5ZM2.75 15V5h-1.5v10h1.5ZM4 3.75h16v-1.5H4v1.5Zm16 12.5h-.5v1.5h.5v-1.5Zm-10.5 0H4v1.5h5.5v-1.5ZM2.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 5h1.5Zm-1.5 10A2.75 2.75 0 0 0 4 17.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Zm20 0c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 15h-1.5Zm1.5-10A2.75 2.75 0 0 0 20 2.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-5.5 10A2.25 2.25 0 0 1 15 17.25v1.5A3.75 3.75 0 0 0 18.75 15h-1.5ZM15 17.25A2.25 2.25 0 0 1 12.75 15h-1.5A3.75 3.75 0 0 0 15 18.75v-1.5ZM12.75 15A2.25 2.25 0 0 1 15 12.75v-1.5A3.75 3.75 0 0 0 11.25 15h1.5ZM15 12.75A2.25 2.25 0 0 1 17.25 15h1.5A3.75 3.75 0 0 0 15 11.25v1.5Zm-9-5h12v-1.5H6v1.5Zm0 4h4v-1.5H6v1.5Zm6.25 5.75V21h1.5v-3.5h-1.5Zm1.085 4.17 2-1-.67-1.34-2 1 .67 1.34Zm1.33-1 2 1 .67-1.34-2-1-.67 1.34Zm3.085.33v-3.5h-1.5V21h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDiploma);
export default ForwardRef;
