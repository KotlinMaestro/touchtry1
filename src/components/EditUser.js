import {Button, Label, Textarea, TextInput} from "flowbite-react";

export default function EditUser() {
    return (
        <>
            <div className="mx-4 mt-5 md:w-96 md:mx-auto my-auto">
                <h3 className="text-2xl text-center font-semibold text-slate-600 mt-6">Edit User</h3>
                <form className="flex flex-col gap-4 mt-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Enter Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Enter Email"
                            />
                        </div>
                        <TextInput
                            id="email"
                            type="text"
                            placeholder="name@example.com"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="occupation"
                                value="Occupation"
                            />
                        </div>
                        <TextInput
                            id="occupation"
                            type="text"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="description"
                                value="Enter your biography"
                            />
                        </div>
                        <Textarea
                            id="biography"
                            placeholder="Enter your biography"
                            required={true}
                            rows={7}
                        />
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </>
    )
}