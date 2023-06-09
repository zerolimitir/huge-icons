import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookHelp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.42 5.305a3.54 3.54 0 0 0-.66.245c-.31.152-.439.246-.702.508-.263.263-.356.392-.508.702-.458.936-.401 1.67.15 1.924a.665.665 0 0 0 .571.014c.312-.13.441-.331.495-.77.061-.488.298-.838.714-1.052.147-.076.243-.093.52-.093s.373.017.52.093c.245.126.466.344.592.584.089.17.105.251.105.54 0 .277-.017.373-.093.52-.214.416-.564.653-1.052.714-.439.054-.64.183-.77.495a.665.665 0 0 0 .014.571c.193.419.557.536 1.234.397a2.742 2.742 0 0 0 1.698-1.112c.676-.985.676-2.185 0-3.17-.61-.891-1.746-1.336-2.828-1.11m.16 6.79a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m-5.2 3.964c-1.155.255-2.01 1.093-2.305 2.26-.071.282-.082.411-.063.76.028.528.099.801.335 1.281.157.32.243.437.55.743.306.307.423.393.743.55.721.354.193.327 6.36.327 6.167 0 5.639.027 6.36-.327.32-.157.437-.243.743-.55.307-.306.393-.423.55-.743.324-.66.32-.633.337-2.61l.015-1.75-6.692.003c-5.395.003-6.74.014-6.933.056'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookHelp);
export default ForwardRef;
