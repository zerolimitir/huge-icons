import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilePng = (
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
            d='M3 18V6a4 4 0 0 1 4-4h6l8 8v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M13 6V2l8 8h-4a4 4 0 0 1-4-4ZM6 18v-4.295h1.392c.527 0 .87.022 1.03.065.247.064.453.205.619.421.166.215.249.494.249.835 0 .264-.048.486-.144.665-.095.18-.217.322-.366.425a1.255 1.255 0 0 1-.448.202 4.952 4.952 0 0 1-.9.062h-.565V18H6Zm.867-3.568v1.218h.475c.342 0 .57-.022.685-.067a.571.571 0 0 0 .37-.545.555.555 0 0 0-.138-.387.6.6 0 0 0-.349-.19 4.173 4.173 0 0 0-.624-.03h-.419ZM10.01 18v-4.295h.845l1.757 2.868v-2.868h.806V18h-.87l-1.732-2.8V18h-.805Zm6.326-1.58v-.723h1.87v1.711c-.183.176-.446.331-.792.466-.344.133-.692.2-1.046.2-.45 0-.84-.095-1.175-.282a1.808 1.808 0 0 1-.753-.809 2.624 2.624 0 0 1-.252-1.145c0-.447.094-.845.282-1.192.187-.348.462-.615.823-.8.275-.143.618-.214 1.028-.214.534 0 .95.112 1.248.337.301.222.495.531.58.926l-.86.16a.9.9 0 0 0-.344-.497 1.02 1.02 0 0 0-.624-.185c-.379 0-.68.12-.905.36-.223.24-.334.597-.334 1.07 0 .51.113.892.34 1.148.226.254.523.381.89.381a1.5 1.5 0 0 0 .545-.105 1.9 1.9 0 0 0 .472-.261v-.545h-.993Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilePng);
export default ForwardRef;
