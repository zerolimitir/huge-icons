import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTimeMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.679.679 1.301 1.042 2.165 1.263.597.152.915.162 4.754.15 3.684-.012 3.722-.013 3.88-.096.502-.262.519-.997.03-1.284l-.19-.112-3.96-.02-3.96-.02-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 19l-.132-.38V5.38L2.912 5c.186-.535.404-.883.804-1.284.401-.4.749-.618 1.284-.804l.38-.132h13.24l.374.131c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374.02 3.96c.011 2.254.036 3.994.057 4.04a.758.758 0 0 0 .712.469.772.772 0 0 0 .647-.389c.083-.158.084-.196.096-3.88.008-2.374-.003-3.851-.029-4.081a4.624 4.624 0 0 0-1.256-2.722c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.477-.047-12.482-.045-12.963.002m6.322 3.994a.8.8 0 0 0-.462.354l-.093.149-.012 2.045-.011 2.045-.269.135c-.576.29-1.063.943-1.171 1.571-.062.36-.028.862.079 1.163l.084.238-.795.802c-.437.44-.818.846-.847.901a.926.926 0 0 0-.051.324c0 .495.415.813.922.707.177-.038.25-.1 1.013-.856l.822-.815.238.088c.326.12 1.09.129 1.418.017a2.264 2.264 0 0 0 1.523-2.568c-.108-.63-.594-1.282-1.173-1.573l-.27-.136-.001-1.924c-.001-1.177-.017-1.994-.042-2.103a.747.747 0 0 0-.902-.564m.456 6.025a.748.748 0 0 1 0 1.396.65.65 0 0 1-.542 0 .745.745 0 0 1-.029-1.382.665.665 0 0 1 .571-.014m3.544 5.976c-.484.115-.717.726-.432 1.13a.939.939 0 0 0 .277.248c.158.083.205.084 3.218.095 2.142.008 3.122-.002 3.273-.033.751-.156.78-1.245.038-1.432-.21-.052-6.156-.06-6.374-.008'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeMinus);
export default ForwardRef;