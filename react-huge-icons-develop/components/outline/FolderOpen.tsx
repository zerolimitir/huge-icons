import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderOpen = (
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
            d='M20 8v.75a.75.75 0 0 0 .75-.75H20ZM4 8h-.75c0 .414.336.75.75.75V8Zm7.413-5.366.461-.592-.46.592Zm.94.732-.46.592.46-.592Zm10.129 7.053.733.157-.733-.157Zm-1.805 8.42.734.156-.734-.157Zm-17.355 0 .734-.158-.734.157Zm-1.804-8.42-.733.157.733-.157ZM19.25 7v1h1.5V7h-1.5Zm.75.25H4v1.5h16v-1.5ZM4.75 8V5h-1.5v3h1.5Zm9.447-3.25H17v-1.5h-2.803v1.5ZM7 2.75h2.57v-1.5H7v1.5Zm3.952.475.94.733.923-1.183-.941-.733-.922 1.183Zm3.245.025a2.25 2.25 0 0 1-1.382-.475l-.922 1.183a3.75 3.75 0 0 0 2.304.792v-1.5ZM20.75 7A3.75 3.75 0 0 0 17 3.25v1.5A2.25 2.25 0 0 1 19.25 7h1.5ZM9.57 2.75c.5 0 .987.167 1.382.475l.922-1.183a3.75 3.75 0 0 0-2.305-.792v1.5ZM4.75 5A2.25 2.25 0 0 1 7 2.75v-1.5A3.75 3.75 0 0 0 3.25 5h1.5ZM3.474 8.75h17.052v-1.5H3.474v1.5Zm18.274 1.512-1.804 8.419 1.467.314 1.804-8.419-1.467-.314ZM16.766 21.25H7.234v1.5h9.532v-1.5Zm-12.71-2.569-1.804-8.42-1.467.315 1.804 8.42 1.467-.315Zm3.178 2.569a3.25 3.25 0 0 1-3.178-2.569l-1.467.314a4.75 4.75 0 0 0 4.645 3.755v-1.5Zm12.71-2.569a3.25 3.25 0 0 1-3.178 2.569v1.5a4.75 4.75 0 0 0 4.645-3.755l-1.467-.314Zm.582-9.931a1.25 1.25 0 0 1 1.222 1.512l1.467.314a2.75 2.75 0 0 0-2.689-3.326v1.5ZM3.474 7.25a2.75 2.75 0 0 0-2.689 3.326l1.467-.314A1.25 1.25 0 0 1 3.474 8.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpen);
export default ForwardRef;
