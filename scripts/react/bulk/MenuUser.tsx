import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMenuUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.44 5.058c-.641.138-1.072.372-1.543.841-.308.305-.392.419-.55.741-.259.527-.325.803-.325 1.36s.066.833.325 1.36c.157.32.243.437.55.743.306.307.423.393.743.55.523.257.801.323 1.36.323s.837-.066 1.36-.323c.32-.157.437-.243.743-.55.307-.306.393-.423.55-.743.257-.523.323-.801.323-1.36s-.066-.837-.323-1.36c-.157-.32-.243-.437-.55-.743-.306-.307-.423-.393-.743-.55a4.168 4.168 0 0 0-.62-.249c-.337-.089-.981-.108-1.3-.04m7.371 1.22a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.224.063 8.214.063 8.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-4.143-.006c-2.279-.004-4.201.007-4.272.024m0 5a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.224.063 8.214.063 8.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-4.143-.006c-2.279-.004-4.201.007-4.272.024m2 5a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.223.062 6.215.062 6.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-3.143-.006c-1.729-.004-3.201.007-3.272.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMenuUser);
export default ForwardRef;
