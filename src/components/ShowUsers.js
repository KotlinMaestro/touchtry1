import {Button, Label, Table, Textarea, TextInput} from "flowbite-react";

export default function ShowUsers(){
    return(
        <>
            <div className="mx-4 mt-5 md:mx-auto my-auto">
                <h3 className="text-2xl text-center font-semibold text-slate-600 mt-6">Users</h3>
                <Table hoverable={true}>
                    <Table.Head>
                        <Table.HeadCell>
                            #
                        </Table.HeadCell>
                        <Table.HeadCell>
                            User Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            User Email
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Occupation
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Biography
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Action
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                1
                            </Table.Cell>
                            <Table.Cell>
                                John Doe
                            </Table.Cell>
                            <Table.Cell>
                                jondoe@gmail.com
                            </Table.Cell>
                            <Table.Cell>
                                Tech Nomad
                            </Table.Cell>
                            <Table.Cell>
                                This is my biography
                            </Table.Cell>
                            <Table.Cell>
                                <a
                                    href="/tables"
                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    Edit
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}