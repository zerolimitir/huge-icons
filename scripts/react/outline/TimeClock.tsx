import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTimeClock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.32 1.281c-4.279.244-8.068 3.128-9.477 7.216a10.886 10.886 0 0 0-.279 6.053 10.76 10.76 0 0 0 7.886 7.886 10.96 10.96 0 0 0 5.1 0 10.76 10.76 0 0 0 7.886-7.886 10.96 10.96 0 0 0 0-5.1 10.758 10.758 0 0 0-8.694-8.052c-.408-.067-1.668-.169-1.862-.151l-.56.034m1.826 1.541a9.086 9.086 0 0 1 2.914.874c2.817 1.383 4.708 4.026 5.118 7.158.123.932.066 2.172-.144 3.144-.289 1.345-1.031 2.857-1.913 3.902a9.31 9.31 0 0 1-3.061 2.404 8.94 8.94 0 0 1-4.06.936 8.93 8.93 0 0 1-4.06-.936c-2.817-1.383-4.708-4.026-5.118-7.158-.123-.932-.066-2.172.144-3.144.211-.982.737-2.227 1.302-3.082a9.335 9.335 0 0 1 6.552-4.097c.56-.077 1.749-.077 2.326-.001m-1.331 2.455a.8.8 0 0 0-.462.354l-.093.149-.012 2.045-.011 2.045-.269.135a2.412 2.412 0 0 0-.976.995 2.213 2.213 0 0 0 .427 2.581c1.354 1.353 3.67.5 3.808-1.404.051-.695-.162-1.275-.646-1.757a2.273 2.273 0 0 0-.551-.416l-.27-.136-.001-1.924c-.001-1.177-.017-1.994-.042-2.103a.747.747 0 0 0-.902-.564m.456 6.025a.748.748 0 0 1 0 1.396.65.65 0 0 1-.542 0 .745.745 0 0 1-.029-1.382.665.665 0 0 1 .571-.014'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeClock);
export default ForwardRef;
