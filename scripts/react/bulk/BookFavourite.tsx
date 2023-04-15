import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.31 7.001c-.783.197-1.309.986-1.184 1.774.076.481.167.606 1.19 1.628 1.1 1.099 1.154 1.135 1.684 1.135.531 0 .584-.036 1.682-1.135.752-.754.963-.988 1.048-1.168a1.574 1.574 0 0 0-.759-2.126c-.243-.115-.308-.128-.631-.127-.481.001-.735.101-1.083.426L12 7.649l-.257-.241a1.557 1.557 0 0 0-.49-.329c-.26-.1-.71-.137-.943-.078m-3.93 9.058c-1.155.255-2.01 1.093-2.305 2.26-.071.282-.082.411-.063.76.028.528.099.801.335 1.281.157.32.243.437.55.743.306.307.423.393.743.55.721.354.193.327 6.36.327 6.167 0 5.639.027 6.36-.327.32-.157.437-.243.743-.55.307-.306.393-.423.55-.743.324-.66.32-.633.337-2.61l.015-1.75-6.692.003c-5.395.003-6.74.014-6.933.056'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookFavourite);
export default ForwardRef;
